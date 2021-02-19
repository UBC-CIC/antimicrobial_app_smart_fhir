const procedureSearchFilter = (procedure, searchText) => {

    if (procedure.timestamp) {
        if (new Date(procedure.timestamp).toLocaleDateString().toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (procedure.performed) {
        if (procedure.performed.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (procedure.details) {
        if (procedure.details.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    if (procedure.system) {
        if (procedure.system.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
    }

    return false;
}

export default procedureSearchFilter;