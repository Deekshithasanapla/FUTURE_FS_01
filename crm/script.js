const API_URL = "http://localhost:5000/api/leads";

const leadForm = document.getElementById("leadForm");

const leadsContainer = document.getElementById("leadsContainer");

const searchInput = document.getElementById("search");

let allLeads = [];


// SHOW SIDEBAR SECTIONS

function showSection(sectionId){

  document.getElementById("dashboardSection").style.display = "none";

  document.getElementById("leadsSection").style.display = "none";

  document.getElementById("analyticsSection").style.display = "none";

  document.getElementById(sectionId).style.display = "block";

}


// FETCH LEADS

async function fetchLeads(){

  try{

    const response = await fetch(API_URL);

    const leads = await response.json();

    allLeads = leads;

    displayLeads(leads);

    updateDashboard(leads);

  }

  catch(error){

    console.log(error);

  }

}


// UPDATE DASHBOARD

function updateDashboard(leads){

  document.getElementById("totalLeads").innerText = leads.length;

  let newCount = 0;
  let contactedCount = 0;
  let convertedCount = 0;

  leads.forEach((lead)=>{

    if(lead.status === "New"){
      newCount++;
    }

    else if(lead.status === "Contacted"){
      contactedCount++;
    }

    else if(lead.status === "Converted"){
      convertedCount++;
    }

  });

  document.getElementById("newLeads").innerText = newCount;

  document.getElementById("contactedLeads").innerText = contactedCount;

  document.getElementById("convertedLeads").innerText = convertedCount;

}


// DISPLAY LEADS

function displayLeads(leads){

  leadsContainer.innerHTML = "";

  leads.forEach((lead)=>{

    leadsContainer.innerHTML += `

      <div class="lead-card">

        <h3>${lead.name}</h3>

        <div class="lead-info">

          <div class="info-item">
            <span class="label">
              <i class="fa-solid fa-envelope"></i>
              Email
            </span>

            <p>${lead.email}</p>
          </div>


          <div class="info-item">
            <span class="label">
              <i class="fa-solid fa-phone"></i>
              Phone
            </span>

            <p>${lead.phone || "N/A"}</p>
          </div>


          <div class="info-item">
            <span class="label">
              <i class="fa-solid fa-building"></i>
              Company
            </span>

            <p>${lead.company || "N/A"}</p>
          </div>


          <div class="info-item">
            <span class="label">
              <i class="fa-solid fa-message"></i>
              Message
            </span>

            <p>${lead.message || "N/A"}</p>
          </div>

        </div>


        <p class="status">
          <i class="fa-solid fa-circle"></i>
          ${lead.status}
        </p>

      </div>

    `;

  });

}


// ADD LEAD

leadForm.addEventListener("submit", async(e)=>{

  e.preventDefault();

  const lead = {

    name: document.getElementById("name").value,

    email: document.getElementById("email").value,

    phone: document.getElementById("phone").value,

    company: document.getElementById("company").value,

    message: document.getElementById("message").value

  };

  await fetch(API_URL,{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify(lead)

  });

  leadForm.reset();

  fetchLeads();

});


// SEARCH

searchInput.addEventListener("input", ()=>{

  const value = searchInput.value.toLowerCase();

  const filteredLeads = allLeads.filter((lead)=>{

    return(

      lead.name.toLowerCase().includes(value) ||

      lead.email.toLowerCase().includes(value)

    );

  });

  displayLeads(filteredLeads);

});


fetchLeads();