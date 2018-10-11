import React from 'react';
import styled from 'styled-components';
import * as PropTypesRepo from '../../types';
import Url from '../Url';
import { AChannel, AVideo, Img } from '../styled';
import PublishedAt from '../PublishedAt';
import {
  DescriptionBox as SharedDescriptionBox,
  SnippetMetaBox,
  ThumbnailBox,
} from './styled';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 600px;
`;

const ATitle = styled(AVideo)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DetailsBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
`;

const DescriptionBox = styled(SharedDescriptionBox)`
  justify-content: flex-start;
`;

const Description = styled.p`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.15rem;
  max-height: 3.45rem;
  font-size: 13px;
`;

class DesktopSnippet extends React.Component {
  render() {
    const {
      channelTitle,
      channelUrl,
      description,
      publishedAt,
      title,
      thumbnail,
      videoUrl,
    } = this.props.details;
    return (
      <Wrapper>
        <Url href={videoUrl} title={title} StyledA={ATitle} />
        <DetailsBox>
          <ThumbnailBox>
            <Url href={videoUrl} title={title}>
              <Img src={thumbnail} alt={title} />
            </Url>
          </ThumbnailBox>
          <DescriptionBox>
            <SnippetMetaBox>
              <Url href={channelUrl} title={channelTitle} StyledA={AChannel} />
              <PublishedAt at={publishedAt} prefix=" - " />
            </SnippetMetaBox>
            <Description>{description}</Description>
          </DescriptionBox>
        </DetailsBox>
      </Wrapper>
    );
  }
}

DesktopSnippet.propTypes = {
  details: PropTypesRepo.rowSnippet.isRequired,
};

export default DesktopSnippet;
