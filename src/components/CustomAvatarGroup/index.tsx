import { Avatar, AvatarGroup, Stack, Typography, SxProps } from "@mui/material";

type CustomAvatarProps = { src?: string; alt?: string };
function CustomAvatarGroup(props: PropsType) {
  const AVATAR_SIZE = props.size;
  const styles: SxProps = {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
  };
  const CustomAvatar = (props: CustomAvatarProps) => (
    <Avatar alt={props.alt} src={props.src} sx={styles} />
  );

  return (
    <AvatarGroup
      max={props.max}
      slotProps={{
        additionalAvatar: { sx: styles },
      }}
    >
      {props.avatars.map((avatar) => (
        <CustomAvatar key={avatar.src} alt={avatar.alt} src={avatar.src} />
      ))}
    </AvatarGroup>
  );
}

type PropsType = {
  size: number;
  max: number;
  avatars: { src?: string; alt?: string }[];
};

export default CustomAvatarGroup;
