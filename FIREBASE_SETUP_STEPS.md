# 🔥 Firebase Setup - Step by Step Guide

## 📋 Required Information

Mujhe yeh values chahiye Firebase Console se. Neeche steps hain ke kaise nikalein:

---

## Step 1: Firebase Project Create Karein

1. **Firebase Console** kholo: https://console.firebase.google.com/
2. **"Add project"** ya existing project select karo
3. Project name enter karo (e.g., "CodeVault")
4. Google Analytics enable/disable karo (optional)
5. **"Create project"** click karo

---

## Step 2: Web App Add Karein

1. Firebase Console me **Project Settings** (gear icon ⚙️) click karo
2. **General** tab me scroll karo
3. **"Your apps"** section me **Web** icon (`</>`) click karo
4. **App nickname** enter karo (e.g., "CodeVault Web")
5. **"Register app"** click karo
6. Ab aapko **Firebase configuration** dikhega - yeh copy karo:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

---

## Step 3: Authentication Enable Karein

### Email/Password Enable:
1. **Authentication** section me jao
2. **"Get started"** click karo (pehli baar)
3. **"Sign-in method"** tab me jao
4. **Email/Password** enable karo
5. **"Save"** click karo

### Google Sign-In Enable:
1. **Authentication** > **Sign-in method** me
2. **Google** provider click karo
3. **Enable** toggle ON karo
4. **Project support email** select karo
5. **"Save"** click karo

---

## Step 4: Authorized Domains Add Karein ⚠️ IMPORTANT

1. **Authentication** > **Settings** tab me jao
2. **"Authorized domains"** section me scroll karo
3. **"Add domain"** click karo
4. `localhost` add karo (development ke liye)
5. Production domain add karo (agar deploy karna hai)

**Note**: Firebase automatically add karta hai:
- `your-project-id.firebaseapp.com`
- `your-project-id.web.app`

---

## Step 5: Firestore Database Setup

1. **Firestore Database** section me jao
2. **"Create database"** click karo
3. **"Start in test mode"** select karo (development ke liye)
4. **Location** select karo (nearest region)
5. **"Enable"** click karo

---

## 📝 Values Jo Mujhe Chahiye

Mujhe yeh **6 values** provide karo Firebase config se:

### 1. API Key
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### 2. Auth Domain
```
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
```

### 3. Project ID
```
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
```

### 4. Storage Bucket
```
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
```

### 5. Messaging Sender ID
```
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
```

### 6. App ID
```
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890
```

---

## 🎯 Format Me Bhejo

Aap mujhe yeh format me values bhej sakte ho:

```
API Key: AIzaSy...
Auth Domain: project-id.firebaseapp.com
Project ID: project-id
Storage Bucket: project-id.appspot.com
Messaging Sender ID: 123456789012
App ID: 1:123456789012:web:abcdef...
```

Ya phir direct `.env.local` file ka content:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef...
```

---

## ✅ Checklist

Setup complete hone se pehle verify karo:

- [ ] Firebase project create ho gaya
- [ ] Web app add ho gaya
- [ ] Email/Password authentication enable hai
- [ ] Google Sign-In enable hai
- [ ] `localhost` authorized domains me add hai
- [ ] Firestore database create ho gaya (test mode)
- [ ] Sab 6 environment variables mil gaye

---

## 🚀 Next Steps

Jab aap mujhe values provide karoge, main:
1. `.env.local` file create kar dunga
2. Firebase config verify karunga
3. Google Sign-In test karunga
4. Sab kuch working confirm karunga

---

## ⚠️ Security Note

**Important**: 
- `.env.local` file **NEVER** commit karo Git me (already in `.gitignore`)
- API keys ko public me share mat karo
- Production me environment variables hosting platform pe set karo

---

## 📸 Screenshots Help Kar Sakte Hain

Agar confusion ho, to Firebase Console ke screenshots bhej sakte ho:
1. Project Settings > General (config values dikhane ke liye)
2. Authentication > Sign-in method (providers enable dikhane ke liye)
3. Authentication > Settings > Authorized domains (domains verify karne ke liye)

---

**Ab mujhe values provide karo, main setup complete kar dunga!** 🎉
