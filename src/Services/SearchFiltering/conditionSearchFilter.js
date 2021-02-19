const conditionSearchFilter = (condition, searchText) => {

    if (condition.timestamp) {
        if (new Date(condition.timestamp).toLocaleDateString().toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (condition.condition) {
        if (condition.condition.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (condition.status) {
        if (condition.status.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (condition.verification) {
        if (condition.verification.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    return false;
}

export default conditionSearchFilter;