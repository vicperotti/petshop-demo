import React from 'react';
import styled from '@emotion/styled';
import { blue, green, grey, pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
//import { colors, mq } from '../styles';

/**
 * Pet Card component renders basic info in a card format
 * for each track populating the tracks grid homepage.
 */
export const PetCard = ({ pet }) => {
  const { petname, id, pettype, petprice, petphoto } = pet;

  return (
    <Link to={`/petDetail/${id}`}>
    <CardContainer>
      <CardContent>
        <CardImageContainer>
          <CardImage src={petphoto} alt={petname} />
        </CardImageContainer> 
        <CardBody>
          <CardTitle>{petname || ''}</CardTitle>
          {/* <CardFooter>
            <AuthorAndTrack>
              <PetPrice>{petprice}</PetPrice>
            </AuthorAndTrack>
          </CardFooter> */}
        </CardBody>
      </CardContent>
    </CardContainer>
    </Link>
  );
};


/** Track Card styled components */
const CardContainer = styled.div({
  borderRadius: 6,
  backgroundSize: 'cover',
  backgroundColor: 'white',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 380,
  margin: 10,
  overflow: 'hidden',
  position: 'relative',
  ':hover': {
    backgroundColor: green[600]
  },
  cursor: 'pointer',
});

const CardContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '100%',
});

const CardTitle = styled.h3({
  textAlign: 'center',
  fontSize: '1.4em',
  lineHeight: '1em',
  fontWeight: 700,
  color: blue,
  flex: 1,
});

const CardImageContainer = styled.div({
  height: 320,
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(50,50,50,0.20)',
  },
});

const CardImage = styled.img({
  objectFit: 'contain',
  width: '100%',
  height: '100%',
  filter: 'grayscale(10%)',
});

const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: 'flex',
  color: grey[0],
  flexDirection: 'column',
  justifyContent: 'space-around',
});

const CardFooter = styled.div({
  display: 'flex',
  flexDirection: 'Row',
});

const PetImage = styled.img({
  height: 30,
  width: 30,
  marginRight: 8,
  borderRadius: '50%',
  objectFit: 'cover',
});

const AuthorAndTrack = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const PetPrice = styled.div({
  lineHeight: '1em',
  fontSize: '1.1em',
});

const QuoteText = styled.div({
  lineHeight: '1em',
  fontSize: '2em',
  padding: 38,
  
});

const TrackLength = styled.div({
  fontSize: '0.8em',
});
