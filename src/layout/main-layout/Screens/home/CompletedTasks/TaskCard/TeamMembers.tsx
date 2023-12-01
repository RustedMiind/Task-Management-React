import { Avatar, AvatarGroup, Stack, Typography } from "@mui/material";
import CustomAvatarGroup from "../../../../../../components/CustomAvatarGroup";

const AVATAR_SIZE = 26;
const CustomAvatar = (props: CustomAvatarProps) => (
  <Avatar
    alt={props.alt}
    src={props.src}
    sx={{
      width: AVATAR_SIZE,
      height: AVATAR_SIZE,
    }}
  />
);
type CustomAvatarProps = { src?: string; alt?: string };
function TeamMembers(props: PropsType) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography
        variant="body2"
        color={props.variant === "dark" ? "background.default" : "text.primary"}
      >
        Team Members
      </Typography>
      <CustomAvatarGroup
        max={3}
        size={26}
        avatars={[
          { alt: "ali" },
          { alt: "ali" },
          { alt: "ali" },
          { alt: "ali" },
          { alt: "ali" },
          { alt: "ali" },
          { alt: "ali" },
          { alt: "ali" },
        ]}
      />
    </Stack>
  );
}

type PropsType = {
  variant: "light" | "dark";
};

export default TeamMembers;
