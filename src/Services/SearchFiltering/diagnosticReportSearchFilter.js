const diagnosticSearchFilter = (diagnostic, searchText) => {

    if (diagnostic.timestamp) {
        if (new Date(diagnostic.timestamp).toLocaleDateString().toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (diagnostic.details) {
        if (diagnostic.details.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (diagnostic.result) {
        if (diagnostic.result.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (diagnostic.system) {
        if (diagnostic.system.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    return false;
}

export default diagnosticSearchFilter;