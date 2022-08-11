var age = getAge('1997-08-16');

var text =  "My name is Filipe Silva, I'm "+ age + " years old, and I'm from Albufeira-Algarve-Portugal. I am graduated in Computer Engineering, "
            + "at the Higher Institute of Engineering of Coimbra (ISEC). A course whose objective is to prepare its students to act effectively and professionally "
            + "in the IT area.<p> I consider myself a perfectionist, which combined with my persistent essence. I adapt easily to all circumstances, having the "
            + "pragmatic ability to stop, think and resolve situations quickly and effectively. I believe that I am skilled in stress management, in addition "
            + "to being able to work efficiently in a team. In this sense, I believe that my values, skills and abilities will guide me to adequate and efficient performance.";
document.getElementById("text").innerHTML += text;

text = "Filipe A. N. Silva"

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

function getAge(dateString) {
    var ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
 }
