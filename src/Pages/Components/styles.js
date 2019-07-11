import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';


export const styles = makeStyles(theme => ({
    pageRoot:{
        flexGrow: 1,
    },
    headerRoot: {
        flexGrow: 1,
    },
    headerMenuButton: {
        marginRight: theme.spacing(2),
    },
    headerSendButton: {
        marginRight: theme.spacing(0.1),
    },
    headerTitle: {
        flexGrow: 1.2,
    },
    paperRoot: {
        position: 'fixed',
        bottom: 0,
        width: '100%'
    },
    bottomNavRoot: {
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1,
        position: 'relative'
    },
    bottomNavItem: {
        width: '50%',
    },
    bottomNavFabButton: {
        position: 'absolute',
        zIndex: 1,
        bottom: 25,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    feedCard: {
        maxWidth: 345,
    },
    feedCardAvatar: {
        backgroundColor: blue[800],
    },
    feedExpand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
    feedExpandOpen: {
        transform: 'rotate(180deg)',
    },
}));