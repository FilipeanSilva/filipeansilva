var text =  "My name is Filipe Silva, I'm 24 years old, and I'm from Albufeira-Algarve-Portugal. I ended up graduating with a degree in Computer Engineering, "
            + "in the area of application development, at the Higher Institute of Engineering of Coimbra (ISEC). A course whose objective is to prepare its students to act "
            + "effectively and professionally in the IT area. I consider myself a perfectionist, which combined with my persistent essence, can benefit me in projects, " 
            + "companies and people. I adapt easily to all circumstances, having the pragmatic ability to stop, think and resolve situations quickly and effectively. "
            + "I believe that I am skilled in stress management, in addition to being able to work efficiently in a team. In this sense, I believe that my values, "
            + "skills and abilities will guide me to adequate and efficient performance.";
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