# 🚀 Quick Setup - Ab Kya Karna Hai

## ✅ Jo Ho Chuka Hai:
- ✅ Firebase Database create ho gaya
- ✅ Authentication enable ho gaya

## 📋 Ab Ye Steps Follow Karein:

### Step 1: Firebase Config Values Nikalein

1. **Firebase Console** kholo: https://console.firebase.google.com/
2. **Project Settings** (gear icon ⚙️) click karo
3. **General** tab me scroll karo
4. **"Your apps"** section me **Web** icon (`</>`) dekho
   - Agar web app nahi hai, to **"Add app"** > **Web** click karo
   - App nickname enter karo (e.g., "CodeVault")
   - **"Register app"** click karo
5. Ab aapko **Firebase configuration** dikhega:

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

### Step 2: Authorized Domains Check Karein

1. **Authentication** > **Settings** tab me jao
2. **"Authorized domains"** section me check karo:
   - `localhost` hona chahiye (agar nahi hai, to **"Add domain"** click karke add karo)
   - Agar production domain hai, to wo bhi add karo

### Step 3: Config Values Copy Karein

Firebase config se yeh 6 values copy karo:

1. **apiKey** - `AIzaSy...` (shuru me)
2. **authDomain** - `project-id.firebaseapp.com`
3. **projectId** - `project-id`
4. **storageBucket** - `project-id.appspot.com`
5. **messagingSenderId** - number
6. **appId** - `1:123456789012:web:abcdef...`

### Step 4: Mujhe Values Bhejo

Aap mujhe yeh format me bhej sakte ho:

```
API Key: AIzaSy...
Auth Domain: project-id.firebaseapp.com
Project ID: project-id
Storage Bucket: project-id.appspot.com
Messaging Sender ID: 123456789012
App ID: 1:123456789012:web:abcdef...
```

Ya phir screenshot bhej sakte ho Firebase Console ka (Project Settings > General tab).

---

## 🎯 Main Kya Karunga:

Jab aap values bhejoge, main:
1. ✅ `.env.local` file create kar dunga
2. ✅ Config verify karunga
3. ✅ Dev server restart karunga
4. ✅ Google Sign-In test karunga
5. ✅ Sab kuch working confirm karunga

---

**Ab Firebase Console se config values copy karke mujhe bhejo!** 📋
