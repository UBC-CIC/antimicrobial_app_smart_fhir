const observationSearchFilter = (observation, searchText) => {

    if (observation.type) {
        if (observation.type.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (observation.timestamp) {
        if (new Date(observation.timestamp).toLocaleDateString().toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (observation.code) {
        if (observation.code.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (observation.value) {
        if (observation.value.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (observation.component) {
        if (observation.component.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (observation.interpretation) {
        if (observation.interpretation.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    return false;
}

export default observationSearchFilter;