document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Fetch user from Supabase
    const { data, error } = await supabase
      .from('users') // 'users' টেবিল থেকে ডেটা
      .select('*')
      .eq('username', username)
      .single();

    if (error || !data) {
      document.getElementById('error-message').textContent = 'Invalid Username!';
      return;
    }

    if (data.password === password) { // পাসওয়ার্ড ম্যাচ হলে
      window.location.href = 'admin.html';
    } else {
      document.getElementById('error-message').textContent = 'Incorrect Password!';
    }
  } catch (err) {
    console.error(err);
    document.getElementById('error-message').textContent = 'Something went wrong!';
  }
});