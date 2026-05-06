const CompanyData =
[
    {
        Logo: "./images/Logo/RGB_LOGO.png",
        LogoAlt: "RGB Vacancy Logo",
        Name: "RGB Vacancy",
        Description:"Connecting brilliant talents with top companies. Your journey to a dream job starts right here.",
        jobs: [
            {
                title: "Lead UI/UX Designer",
                department: "Creative",
                salary: "MYR 6500 - 9000",
                type: "Full Time",
                isFullTime: true
            },
            {
                title: "Junior Java Developer",
                department: "IT",
                salary: "MYR 3500 - 5000",
                type: "Contract",
                isFullTime: false
            }
        ]
    },

    {
        Logo: "./images/Logo/redball.png",
        LogoAlt: "Red Ball Logo",
        Name: "Red Ball",
        Description: "Welcome to Red Ball! We don't just make the most delicious, cheesiest handcrafted pizzas in town; we are dedicated to delivering pure joy. Our iconic 'Red Ball' symbolizes passion, energy, and a freshly baked round pizza. Join us and become a part of the team that delivers passion and energy!",
        jobs: [
            {
                title: "Chief Red Ball Mascot",
                department: "Marketing",
                salary: "MYR 2500-3000",
                type: "Full Time",
                isFullTime: true
            },
            {
                title: "Red Ball Rider",
                department: "Logistics",
                salary: "Up to MYR 15 per hour",
                type: "Part Time",
                isFullTime: false
            }
        ]
    },

    {
        Logo: "./images/Logo/youtube.png",
        LogoAlt: "Youtube Logo",
        Name: "Youtube",
        Description: "Working at the intersection of cutting-edge technology and boundless creativity, we move at the speed of culture with a shared goal to show people the world. We explore new ideas, solve real problems, and have fun—together.",
        jobs: [
            {
                title: "Video Editor",
                department: "Content Production",
                salary: "MYR 3500-5000",
                type: "Full Time",
                isFullTime: true
            },
            {
                title: "Thumbnail Designer",
                department: "Creative",
                salary: "Up to MYR 30 per hour",
                type: "Part Time",
                isFullTime: false
            }
        ]
    }
];

const companyContainer = document.querySelector(".company-list");

let htmlCode_company = "";

for (let i = 0; i < CompanyData.length; i++)
{
    let company = CompanyData[i];

    let htmlCode_job = "";

    for (let j = 0; j < company.jobs.length; j++)
    {
        let job = company.jobs[j];
        let typeCssClass_job = job.isFullTime ? "job-type-full" : "";

        htmlCode_job +=
        `
            <div class="job-item">
                <div class="job-main">
                    <h4 class="job-title">${job.title}</h4>
                    <div class="job-meta">
                        <span class="badge badge-department">${job.department}</span>
                        <span class="badge badge-salary">${job.salary}</span>
                        <span class="job-type-badge ${typeCssClass_job}">${job.type}</span>
                    </div>
                </div>
            </div>
        `;
    }

    htmlCode_company += `
        <div class="company-card">
            <div class="company-logo">
                <img src="${company.Logo}" alt="${company.LogoAlt}" class="company-logo-img">
            </div>
            
            <div class="company-information">
                <h2 class="company-name">${company.Name}</h2>
                <p class="company-description">${company.Description}</p>

                <div class="job-section">
                    <h3 class="section-title">Currently Hiring</h3>
                    
                    <a href="job.html" class="job-list">
                        ${htmlCode_job}
                    </a>
                </div>
            </div>
        </div>
    `;
}

companyContainer.innerHTML = htmlCode_company;