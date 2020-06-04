import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

import useStorage from "../hooks/useStorage";

function WelcomeDialog() {
  const [visited, setVisited] = useStorage("welcome-v2", "new-user");
  const handleClose = () => setVisited("returning-user");
  return (
    <Dialog open={visited === "new-user"} onClose={handleClose}>
      <DialogTitle>Set with Friends</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1">
          Welcome to <em>Set with Friends</em>, an online multiplayer card game!
          It looks like this is your first visit, so here are a few suggestions
          to get started:
        </Typography>
        <Typography variant="body1" component="div" style={{ padding: 12 }}>
          <div>
            <span role="img" aria-label="Game emoji">
              🎮
            </span>{" "}
            Join a <strong>public game</strong> and start playing in seconds.
          </div>
          <div>
            <span role="img" aria-label="Fire emoji">
              🔥
            </span>{" "}
            Create a new <strong>private game</strong> and invite your friends
            by link.
          </div>
          <div>
            <span role="img" aria-label="Books emoji">
              📚
            </span>{" "}
            Review the <strong>rules of Set</strong> at our help page.
          </div>
          <div>
            <span role="img" aria-label="Chat emoji">
              💬
            </span>{" "}
            Chat with <strong>online users</strong> in the lobby.
          </div>
        </Typography>
        <Typography variant="body1">
          Finally, if you arrived here by link to a particular game, then it
          will start soon. We hope you enjoy using our site!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Enter
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default WelcomeDialog;
