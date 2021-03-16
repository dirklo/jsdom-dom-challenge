document.addEventListener('DOMContentLoaded', () => {
    const minusButton = document.querySelector('#minus');
    const plusButton = document.querySelector('#plus');
    const heartButton = document.querySelector('#heart');
    const pauseButton = document.querySelector('#pause');
    const counter = document.querySelector('#counter')
    const commentsList = document.querySelector('#list')
    const commentForm = document.querySelector('#comment-form')
    const commentInput = document.querySelector('#comment-input')
    const likes = document.querySelector('.likes')

    function secondTimer() {
        changeCounter("plus")
    }
    let oneSec = setInterval(secondTimer, 1000);

    plusButton.addEventListener('click', () => {
        changeCounter("plus");
    });
    
    minusButton.addEventListener('click', () => {
        changeCounter("minus");
    });

    pauseButton.addEventListener('click', toggleButtons);

    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addComment()
    });

    heartButton.addEventListener('click', addLike);

    function toggleButtons() {
        if (minusButton.disabled === false) {
            minusButton.disabled = true;
            plusButton.disabled = true;
            heartButton.disabled = true;
            clearInterval(oneSec);
            pauseButton.innerHTML = "resume";
        } else {
            minusButton.disabled = false;
            plusButton.disabled = false;
            heartButton.disabled = false;
            oneSec = setInterval(secondTimer, 1000);
            pauseButton.innerHTML = "pause";
        }
    }

    function changeCounter(dir) {
        if (dir === "plus") {
            counter.innerHTML = parseInt(counter.innerHTML) + 1;
        } else if (dir === "minus") {
            counter.innerHTML = parseInt(counter.innerHTML) - 1;
        }
    };

    function addComment() {
        text = commentInput.value;
        const new_li = document.createElement('li');
        new_li.innerHTML = text;
        commentInput.value = "";
        commentsList.appendChild(new_li);
    };

    function addLike() {
        num = parseInt(counter.innerText);
        liked_num = document.querySelectorAll(`[data-num="${num}"]`)[0];
        let like_counter = 1
        if (liked_num) {
            like_counter = parseInt(liked_num.querySelectorAll('span')[0].innerText) + 1;
        }
        if (like_counter === 1) {
            const new_li = document.createElement('li');
            new_li.setAttribute('data-num', num)
            new_li.innerHTML = `The number ${num} has been liked <span>${like_counter}</span> time`;
            likes.appendChild(new_li);
        } else {
            liked_num.innerHTML = `The number ${num} has been liked <span>${like_counter}</span> times`
        };
    };
});


