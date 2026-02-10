# Firebase Authentication Setup Guide

## 🔥 Firebase Configuration

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select existing project
3. Follow the setup wizard

### Step 2: Enable Authentication Methods
1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Enable the following providers:
   - **Email/Password**: Enable
   - **Google**: Enable and configure OAuth consent screen

### Step 3: Get Firebase Config
1. Go to **Project Settings** (gear icon)
2. Scroll to **Your apps** section
3. Click **Web** icon (`</>`) to add a web app
4. Copy the Firebase configuration object

### Step 4: Set Environment Variables
1. Create `.env.local` file in project root
2. Add your Firebase config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

### Step 5: Set Up Firestore
1. Go to **Firestore Database** in Firebase Console
2. Click **Create database**
3. Start in **test mode** (for development)
4. Choose your location
5. The `users` collection will be automatically created when users sign up

### Step 6: Configure Authorized Domains
**IMPORTANT**: This is required for authentication to work!

1. Go to **Authentication** > **Settings** > **Authorized domains**
2. Add the following domains:
   - `localhost` (for local development)
   - Your production domain (e.g., `yourdomain.com`, `www.yourdomain.com`)
   - Firebase automatically includes `your-project.firebaseapp.com`
3. Click **Add domain** for each one

### Step 7: Configure Google OAuth
1. In **Authentication** > **Sign-in method** > **Google**
2. Click **Enable** toggle
3. Add your project's support email
4. The OAuth consent screen will be configured automatically
5. Click **Save**

**Note**: Make sure your authorized domains are set up (Step 6) before testing Google sign-in.

## 📁 File Structure

```
lib/
  └── firebase.ts          # Firebase initialization
contexts/
  └── AuthContext.tsx     # Auth context and provider
app/
  └── auth/
      └── page.tsx        # Auth page with Firebase integration
components/
  └── UserProfile.tsx     # User profile management
```

## 🚀 Features Implemented

✅ Email/Password Signup & Login
✅ Google OAuth Authentication
✅ Password Reset
✅ User Profile Management
✅ Firestore User Collection
✅ Error Handling
✅ Form Validation
✅ Smooth UI Animations

## 🔒 Security Rules (Firestore)

For production, update Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🎨 UI Features

- Modern modal-based auth flows
- Smooth animations with Framer Motion
- Error and success message handling
- Responsive design
- Purple/Violet theme consistency
- Loading states
- Form validation

## 📝 Usage

1. Users can sign up with email/password or Google
2. Password reset via email
3. Profile management in Settings
4. Automatic redirect to dashboard after auth
5. User data stored in Firestore `users` collection

## ⚠️ Important Notes

- **Replace placeholder values** in `.env.local` with your actual Firebase config
- **Enable required authentication methods** in Firebase Console (Email/Password and Google)
- **Set up Firestore database** before using (test mode for development)
- **Add authorized domains** in Firebase Console > Authentication > Settings (localhost and production domain)
- **Configure OAuth consent screen** for Google sign-in
- **Update security rules** for production use
- **Never commit** `.env.local` to version control (already in `.gitignore`)

## 🔧 Troubleshooting

### Error: "Invalid Firebase API key"
- Check that all environment variables in `.env.local` are correct
- Make sure variable names start with `NEXT_PUBLIC_`
- Restart your dev server after changing `.env.local`
- Verify the API key in Firebase Console > Project Settings

### Error: "Unauthorized domain"
- Go to Firebase Console > Authentication > Settings > Authorized domains
- Add `localhost` for local development
- Add your production domain for deployed apps

### Error: "Firebase is not initialized"
- Check browser console for specific error messages
- Verify all environment variables are set in `.env.local`
- Make sure `.env.local` is in the project root directory
- Restart the dev server: `npm run dev`

### Google Sign-in not working
- Ensure Google provider is enabled in Firebase Console
- Check that authorized domains include your current domain
- Verify OAuth consent screen is configured
- Check browser console for specific error messages
