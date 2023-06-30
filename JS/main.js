document.addEventListener('DOMContentLoaded', () => {
    const labels = document.querySelectorAll('label');
    labels.forEach((label) => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, i) => `<span style="transition-delay: ${i * 50}ms">${letter}</span>`)
            .join('');
    });

    const form = document.getElementById('registerForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputs = form.querySelectorAll('input');
        const values = Array.from(inputs).map((input) => input.value);
        console.log(values);
        fetch('process.php', {
            method: 'POST',
            body: new FormData(form)
        })
            .then(response => response.text())
            .then(data => {
                Swal.fire({
                    title: 'Congrats',
                    text: 'Data Successfully Logged',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    form.reset(); // Reset the form after successful submission
                });
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    title: 'Oops',
                    text: 'Something went wrong',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    });
});