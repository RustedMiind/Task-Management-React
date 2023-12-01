import { Avatar, AvatarGroup, Stack, Typography } from "@mui/material";

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
      <AvatarGroup
        max={3}
        slotProps={{
          additionalAvatar: { sx: { width: AVATAR_SIZE, height: AVATAR_SIZE } },
        }}
      >
        <CustomAvatar alt="Remy Sharp" />
        <CustomAvatar alt="Travis Howard" />
        <CustomAvatar alt="Cindy Baker" />
        <CustomAvatar alt="Agnes Walker" />
        <CustomAvatar alt="Trevor Henderson" />
      </AvatarGroup>
    </Stack>
  );
}

type PropsType = {
  variant: "light" | "dark";
};

export default TeamMembers;
