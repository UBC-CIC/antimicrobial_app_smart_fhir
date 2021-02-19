const medicationSearchFilter = (medication, searchText) => {

    if (medication.timestamp) {
        if (new Date(medication.timestamp).toLocaleDateString().toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (medication.details) {
        if (medication.details.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    return false;
}

export default medicationSearchFilter;