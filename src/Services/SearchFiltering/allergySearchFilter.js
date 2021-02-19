
const allergySearchFilter = (allergy, searchText) => {

    if (allergy.type) {
        if (allergy.type.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (allergy.clinicalStatus) {
        if (allergy.clinicalStatus.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (allergy.description) {
        if (allergy.description.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (allergy.criticality) {
        if (allergy.criticality.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (allergy.reaction) {
        if (allergy.reaction.reaction) {
            if (allergy.reaction.reaction.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
        }
        if (allergy.reaction.severity) {
            if (allergy.reaction.severity.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
        }
    }

    if (allergy.date) {
        if (new Date(allergy.date).toLocaleDateString().toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (allergy.verification) {
        if (allergy.verification.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    return false;
}

export default allergySearchFilter;