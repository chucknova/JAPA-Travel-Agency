const admin = require('firebase-admin');

// Make sure this file exists in the same folder
const serviceAccount = require('./service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function makeUserAdmin(email) {
  try {
    const user = await admin.auth().getUserByEmail(email);
    
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

// Replace with your actual admin email
makeUserAdmin('admin@japa.com');