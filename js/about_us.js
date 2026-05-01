const MemberData=
[
    {
        Photo:"./images/profile/raymond.png",
        PhotoAlt:"Raymond Profile Picture",
        Name:"Raymond Lee ANG",
        StudentId:"105804647",
    },

    {
        Photo:"./images/profile/gladys.png",
        PhotoAlt:"Gladys Profile Picture",
        Name:"Gladys Yen Qin KHOO",
        StudentId:"105815607",
    },

    {
        Photo:"./images/profile/bay.png",
        PhotoAlt:"Bay Profile Picture",
        Name:"Hung Wei BAY",
        StudentId:"105802609",
    }
]

const MemberDataContainer = document.querySelector(".about-card");

let htmlCode_member = "";

for (let i = 0; i < MemberData.length; i++)
{
    let member = MemberData[i];

    htmlCode_member +=
    `
        <div class="card">
            <img src="${member.Photo}" alt="${member.PhotoAlt}" class="card-img">
            <h2>${member.Name}</h2>
            <p>Student ID: ${member.StudentId}</p>
            <button class="card-btn" onclick="openPopup('${member.Name}','${member.StudentId}','${member.Photo}','${member.PhotoAlt}')">View Profile</button>
        </div>
    `;
}

MemberDataContainer.innerHTML = htmlCode_member;

function openPopup(name, id, img, alt)
{
    document.querySelector(".about-popup-contains").style.display = "flex";
    document.querySelector(".about-popup-img").src = img;
    document.querySelector(".about-popup-img").alt = alt;
    document.querySelector(".about-popup-name").innerText = name;
    document.querySelector(".about-popup-id").innerText = "Student ID: " + id;
}

function closePopup()
{
    document.querySelector(".about-popup-contains").style.display = "none";
}
