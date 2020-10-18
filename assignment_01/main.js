// On input search for the text:
function searchInput(){
    const searchWord = document.getElementById("searchWord");
    const textBox = document.getElementById("textBox");
    const text = textBox.textContent;
    console.log(searchWord.value);
    let regex = new RegExp('('+searchWord.value+')', 'ig');
    let newText = text.replace(regex, '<span class="highlight">$1</span>');
    textBox.innerHTML = newText;  
}