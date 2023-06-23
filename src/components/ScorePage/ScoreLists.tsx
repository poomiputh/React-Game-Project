import {
    Avatar,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material'
import { IScoreRequest, deleteAppScore } from '../../api/scoreApi'
import ImageIcon from '@mui/icons-material/Image'
import DeleteIcon from '@mui/icons-material/Delete'
import { DelScore } from '../image_components/ImageComponents'

interface ScoreListsProps {
    scoreLists: IScoreRequest[]
    onDeleteSuccess: (deleteScoreID: number) => void
}
function ScoreLists({ scoreLists, onDeleteSuccess }: ScoreListsProps) {
    const onClickDelete = async (scoreID: number) => {
        try {
            await deleteAppScore(scoreID)
            onDeleteSuccess(scoreID)
        } catch (err) {}
    }

    return (
        <List
            dense
            style={{
                maxHeight: 200,
                overflow: 'auto',
                padding: '0 10px 0 10px',
            }}
        >
            {scoreLists.map((score) => (
                <ListItem
                    className="text_box"
                    style={{
                        fontFamily: 'Public Pixel',
                    }}
                    key={score.id}
                    secondaryAction={
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => onClickDelete(score.id!)}
                        >
                            <DelScore></DelScore>
                        </IconButton>
                    }
                >
                    {/* <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar> */}
                    <Grid container>
                        <Grid item xs={6}>
                            <ListItemText
                                disableTypography={true}
                                primary={score.name}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            style={{ display: 'grid', placeItems: 'center' }}
                        >
                            <ListItemText
                                disableTypography={true}
                                primary={score.score}
                            />
                        </Grid>
                    </Grid>
                </ListItem>
            ))}
        </List>
    )
}

export default ScoreLists
