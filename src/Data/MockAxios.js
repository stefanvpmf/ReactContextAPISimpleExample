
const axiosMock = {
    getData: () => {
        return Promise.resolve([
            { id: '1j489rkr', description: 'This is row 1', minutes: 60, isEdited: false },
            { id: '93fifroo', description: 'This is row 2', minutes: 80, isEdited: false },
            { id: '39fsdn4f', description: 'This is row 3', minutes: 60, isEdited: false },
            { id: '29fhfbr3', description: 'This is row 4', minutes: 70, isEdited: false }
        ]);
    },

    updateRow: () => {
        return Promise.resolve({
            data: { result: 'api call successful' }
        });
    }

};

export default axiosMock;