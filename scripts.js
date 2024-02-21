
const collection1 = ["A girl", "A cat", "A baby", "A boy", "A bird"];
const collection2 = ["played joyfully", "explored curiously", "laughed happily", "dreamt peacefully", "sang melodiously"];
const collection3 = ["on chair", "through tunnel", "through road", "on bed", "on tree"];
const collection4 = ["near park", "near rainbow", "near sun", "near garden", "near city"];
const collection5 = ["with flower", "with toys", "with parents", "without fear", "without parents"];

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const storyDiv = document.getElementById("story");
const generateButton = document.getElementById("GenerateBtn");
const randomStoryBtn = document.getElementById("randomStoryBtn");
const resetBtn = document.getElementById("resetBtn");

function updateStory() {
    if (btn1.textContent.includes('Word') ||
        btn2.textContent.includes('Word') ||
        btn3.textContent.includes('Word') ||
        btn4.textContent.includes('Word') ||
        btn5.textContent.includes('Word')) {
        alert("Choose all 5 words to make a story")
    } else {
        storyDiv.textContent = `${btn1.textContent} ${btn2.textContent} ${btn3.textContent} ${btn4.textContent} ${btn5.textContent}.`;
    }
}

function bindButtonWord(button, list) {
    button.textContent = list[Math.floor(Math.random() * 5)];
}

btn1.addEventListener("click", function () {
    bindButtonWord(btn1, collection1)
});

btn2.addEventListener("click", function () {
    bindButtonWord(btn2, collection2)
});
generateButton.addEventListener("click", function () {
    updateStory();
});

btn3.addEventListener("click", function () {
    bindButtonWord(btn3, collection3)
});

btn4.addEventListener("click", function () {
    bindButtonWord(btn4, collection4)
});

btn5.addEventListener("click", function () {
    bindButtonWord(btn5, collection5)
});

randomStoryBtn.addEventListener("click", function () {
    bindButtonWord(btn1, collection1)
    bindButtonWord(btn2, collection2)
    bindButtonWord(btn3, collection3)
    bindButtonWord(btn4, collection4)
    bindButtonWord(btn5, collection5)
    updateStory();
});
resetBtn.addEventListener("click", function () {
    btn1.textContent = "Word 1"
    btn2.textContent = "Word 2"
    btn3.textContent = "Word 3"
    btn4.textContent = "Word 4"
    btn5.textContent = "Word 5"
    storyDiv.textContent = ''
});