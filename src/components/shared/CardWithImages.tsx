import React, { useRef, useState } from 'react';
import { Box, Card, CardMedia } from '@mui/material';
import { SubtitleText } from './Text';
import { OutlinedIconButton, RegularIconButton } from './buttons';
import { deleteCompanyImage, uploadCompanyImage } from '../../services/api-service';

interface Photo {
  name: string;
  filepath: string;
  alt?: string;
}

interface PhotosComponentProps {
  title?: string,
  iconAddSrc?: string,
  companyId?: string,
  iconDeleteSrc?: string,
  photosArray?: Photo[];
}

const CardWithImages: React.FC<PhotosComponentProps> = ({
  companyId = '12',
  photosArray = [],
  iconAddSrc = '/AddPhoto.svg',
  iconDeleteSrc = '/Trash.svg',
  title = 'Photos'
}) => {
  const [photos, setPhotos] = useState<Photo[]>(photosArray);
  const fileInput = useRef<HTMLInputElement | null>(null);

  const handleDelete = (name: string) => {
    setPhotos(photos.filter((photo) => photo.name !== name));
    deleteCompanyImage(companyId, name)
  };


  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFile = event.target.files[0];

      const response = await uploadCompanyImage(companyId, newFile);
      const uploadedPhoto: Photo = {
        name: response.name,
        filepath: response.filepath,
        alt: response.name,
      }
      setPhotos([...photos, uploadedPhoto]);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.12)",
        width: "640px",
        margin: "0 auto",
      }}
    >
      <Box display='flex' width='100%' justifyContent='space-between' p={3} >
        <SubtitleText text={title} />
        <Box onClick={() => fileInput?.current?.click()}>
          <input
            ref={fileInput}
            type="file"
            id="file-upload"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
          </label>
          <OutlinedIconButton src={iconAddSrc} text='Add' width='73px' padding={1} iconMr={8} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'start' }}>
        {photos.map((photo) => (
          <Card
            key={photo.name}
            sx={{
              width: 144,
              height: 108,
              position: 'relative',
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              image={photo.filepath}
              alt={photo.alt}
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: 1,
              }}
            />
            <Box onClick={() => handleDelete(photo.name)}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                width: 28,
                height: 28,
                cursor: 'pointer'
              }}
            >
              <RegularIconButton padding={0.5} src={iconDeleteSrc} width='28px' height={28} iconH={16} />
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CardWithImages;
