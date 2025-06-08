// Firebase configuration
const firebaseConfig = {
  // Your Firebase configuration goes here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to Firebase services
const auth = firebase.auth();
const firestore = firebase.firestore();

// Register form submission
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User registration successful
      const user = userCredential.user;
      document.getElementById('register-message').textContent = 'Registro exitoso. Redirigiendo a la página de inicio de sesión...';
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 2000);
    })
    .catch((error) => {
      // Handle registration error
      document.getElementById('register-message').textContent = 'Error en el registro: ' + error.message;
    });
});

// Login form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User login successful
      const user = userCredential.user;
      document.getElementById('login-message').textContent = 'Inicio de sesión exitoso. Redirigiendo a la página de citas...';
      setTimeout(() => {
        window.location.href = 'appointments.html';
      }, 2000);
    })
    .catch((error) => {
      // Handle login error
      document.getElementById('login-message').textContent = 'Error en el inicio de sesión: ' + error.message;
    });
});

// Appointment form submission
const appointmentForm = document.getElementById('appointment-form');
appointmentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const number = document.getElementById('number').value;np
  const email = document.getElementById('email').value;
  const text = document.getElementById('text').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const reason = document.getElementById('reason').value;
   const file = document.getElementById('file').value;

  // Get the current user
  const user = auth.currentUser;

  // Save the appointment to Firestore
  firestore.collection('appointments').add({
    userId: user.uid,
    text: text,
    email: email,
    date: date,
    time: time,
    file: file,
    reason: reason,
    number: number
  })
  .then(() => {
    // Appointment saved successfully
    document.getElementById('appointment-message').textContent = 'Cita agendada exitosamente.';
    appointmentForm.reset();
  })
  .catch((error) => {
    // Handle appointment save error
    document.getElementById('appointment-message').textContent = 'Error al agendar la cita: ' + error.message;
  });
});
