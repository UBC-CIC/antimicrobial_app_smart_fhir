// processes raw allergy data
const allergyProcessing = (allergies) => {
    let processedData = [];

    for (let allergy of allergies) {
        if (allergy.resource.code) {
            let reaction;
            let date;
            let type;
            let verification;
            let criticality;
            let clinicalStatus;
            let description;
            try {

                if (allergy.resource.reaction) {
                    reaction = {
                        reaction: allergy.resource.reaction[0].manifestation[0].text,
                        severity: allergy.resource.reaction[0].severity
                    }
                }

                if (allergy.resource.category) {
                    type = allergy.resource.category[0].toLowerCase();
                } else {
                    type = "unclassified";
                }


                if (allergy.resource.code.text) {
                    description = allergy.resource.code.text;
                }

                if (allergy.resource.recordedDate) {
                    date = new Date(allergy.resource.recordedDate);
                }


                if (allergy.resource.verificationStatus) {
                    verification = allergy.resource.verificationStatus.coding[0].code;
                }


                if (allergy.resource.criticality) {
                    criticality = allergy.resource.criticality;
                }


                if (allergy.resource.clinicalStatus) {
                    clinicalStatus = allergy.resource.clinicalStatus.coding[0].code;
                }



            } catch (err) {

            }

            let formattedAllergy = {
                type: type,
                clinicalStatus: clinicalStatus,
                description: description,
                criticality: criticality,
                reaction: reaction,
                date: date,
                verification: verification
            }

            // add allergy to array
            processedData.push(formattedAllergy);

        }
    }

    try {
        processedData.sort((a,b) => {
            return Date.parse(b.date) - Date.parse(a.date);
        });
    } catch (err) {

    }

    return processedData;
}

export default allergyProcessing;