import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#105652',
        padding: 24
    },

    eventName: {
        color: '#E26A2C',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'

        
    },
    eventSubTitle: {
        color: '#FFD460',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5
    },
    eventTitle: {
        color: '#E26A2C',
        fontSize: 22,
        marginTop: 40
    },
    inputTitle: {
        flex: 1,
        height: 56,
        backgroundColor: '#E6D2AA',
        borderRadius: 5,
        color: '#EA5455',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    inputDescription: {
        flex: 1,
        height: 160,
        backgroundColor: '#E6D2AA',
        borderRadius: 5,
        color: '#EA5455',
        fontSize: 16,
        marginRight: 12,
        padding: 16,
        textAlignVertical: "top"
    },
    buttonText: {
        
        color: '#1D5C63',
        fontSize: 24
    },
    viewButton: {
        marginRight: 12,
        alignItems: 'flex-end'
    },
    button: {
        marginTop: 15,
        width: 100,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#001D6E',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36
    },
    listEmptyText: {
        color: "#EA5455",
        textAlign: "center",
        fontSize: 14
    }
});