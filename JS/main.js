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
// =====Review Code=======================================================
// Include the star-rating and autosize libraries

// star-rating.js
// Example CDN link: <script src="https://cdn.jsdelivr.net/npm/star-rating.js/dist/star-rating.min.js"></script>

// autosize.js
// Example CDN link: <script src="https://cdn.jsdelivr.net/npm/autosize/dist/autosize.min.js"></script>

document.addEventListener("DOMContentLoaded", function () {
    // Initialize star rating
    const starrrOptions = {
        rating: undefined,
        numStars: 5,
        change: function (e, value) { }
    };

    $(".starrr").starrr(starrrOptions);

    // Initialize autosize
    autosize($('#new-review'));

    let reviewBox = document.getElementById('post-review-box');
    let newReview = document.getElementById('new-review');
    let openReviewBtn = document.getElementById('open-review-box');
    let closeReviewBtn = document.getElementById('close-review-box');
    let ratingsField = document.getElementById('ratings-hidden');

    openReviewBtn.addEventListener('click', function (e) {
        reviewBox.style.display = 'block';
        autosize.update(newReview);
        newReview.focus();
        openReviewBtn.style.display = 'none';
        closeReviewBtn.style.display = 'block';
    });

    closeReviewBtn.addEventListener('click', function (e) {
        e.preventDefault();
        reviewBox.style.display = 'none';
        newReview.focus();
        openReviewBtn.style.display = 'block';
        closeReviewBtn.style.display = 'none';
    });

    $('.starrr').on('starrr:change', function (e, value) {
        ratingsField.value = value;
    });
});
