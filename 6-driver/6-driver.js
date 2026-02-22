const hasLicense = true;
const age = 18;
const isDrunk = false;
const drive = hasLicense && age >= 18 && !isDrunk;
const canDrive = drive ? "может" : "не может";
