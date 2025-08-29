const admin = require('firebase-admin');

// Download service account key from Firebase Console
const serviceAccount = require('./service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function makeUserAdmin(email) {
  try {
    // Get the user by email
    const user = await admin.auth().getUserByEmail(email);
    
    // Set admin custom claims
    await admin.auth().setCustomUserClaims(user.uid, { 
      admin: true,
      role: 'admin' 
    });
    
    console.log(`✅ ${email} is now an admin!`);
    console.log(`User ID: ${user.uid}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Replace with your admin email
makeUserAdmin('admin@yourdomain.com');