var text = "My name is Filipe Silva, I'm 24 years old and I'm from Albufeira-Algarve-Portugal. " +
    "I recently finished my degree in Computer Engineering, in the field of application development," +
    " at Instituto Superior de Engenharia de Coimbra. Course whose objective is to prepare its students " +
    " to serve effectively and professionally in the field of Information Technology. " +
    "I consider myself a perfectionist, which combined with my persistent essence, can benefit me " +
    "in projects, companies and people. I adapt easily to all circumstances, having the pragmatic " +
    "ability to stop, think and resolve situations quickly and effectively. I believe I am skilled " +
    "in managing personal relationships, as well as being able to work efficiently in a team. In this sense," +
    " I believe that my values, skills and abilities will guide me towards an adequate and efficient performance.";
document.getElementById("text").innerHTML += text;
var text = "Filipe A. N. Silva"
//p.textContent = text

var i = 0;
function typing() {
    if (i < text.length) {
        document.getElementById("title").innerHTML += text.charAt(i);
        i++;
        if (text.charAt(i) == ' ')
            setTimeout(typing, 200);
        else
            setTimeout(typing, 100);
    }
}
typing();

