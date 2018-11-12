
var myInfo = {
    "identifier": [
        {
            "resourceType": "Patient",
            "id": "xcda",
            "text": "",
            "status": "generated",
            "div": "\n      \n      <p>Henry Levin the 7th</>\n    \n    </div>"
        },
        {
            "use": "usual",
            "type": {
                "coding": [
                    {
                        "system": "htt://hl7.org/fhir/v2/0203",
                        "code": "MR"
                    }
                ]
            },
            "system": "urn:oid:2.16.840.1.113883.19.5",
            "value": "12345",

            "active": true,

            "name": [
                {
                    "family": [
                        "Levin"
                    ],
                    "given": [
                        "Henry"
                    ]
                }
            ],
            "gender": "male",
            "birthDate": "2002-09-24",
            "managingOrganization": {
                "reference": "Organization/2.16.840.1.113883.19.5",
                "display": "University Health Network"
            },
            "conditions": [
                "Diabetes",
                "High blood pressure",
                "Asthma"
            ]
        }]
    }
    

console.log(myInfo);

    var output = document.getElementById('output');
    output.innerHTML =  "Name of patient:"+ myInfo.identifier[1].name[0].given+" "+myInfo.identifier[1].name[0].family+"<br> "+
    "Organization name:"+ myInfo.identifier[1].managingOrganization.display+" <br>"+
     "Gender:"+myInfo.identifier[1].gender +"<br>"+
     //"Number of conditions they have:" + myInfo.identifier[1].conditions["\n"]
    "List of all conditions:" + "<br>"+"-"+
                            myInfo.identifier[1].conditions[0]+"<br>"+"-"+ 
                            myInfo.identifier[1].conditions[1]+"<br>"+"-"+
                             myInfo.identifier[1].conditions[2]






