let employee_status = "employee";
let dietary_service;

switch(employee_status){
    case "employee":
        dietary_service = "Dietary Services";
        break;
    case "Enrolled Member":
        dietary_service = "Dietary Services and One on One";
        break;
    case "Subscriber":
        dietary_service = "Partial Services";
        break;
    case "Non-Subscriber":
        dietary_service = "Need to Enroll First";
        break;
}

console.log("Dietary Service Authorized:", dietary_service)