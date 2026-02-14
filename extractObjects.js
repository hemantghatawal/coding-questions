const organization = {
  name: "Biz4Group",
  location: "India",
  department: {
    name: "Engineering",
    team: {
      teamLead: "Hemant Saini",
      membersCount: 8,
      employee: {
        empId: 202,
        role: "Full Stack Engineer",
        experience: "2.5 years",
        address: {
          city: "Jaipur",
          state: "Rajasthan",
          country: "India",
        },
      },
    },
  },
};


function extract(obj){
    for(key in obj){
        if(typeof obj[key] === "object"){
            extract(obj[key])
        } else {
            console.log(key ,"=>", obj[key])
        }
    }
}

extract(organization)