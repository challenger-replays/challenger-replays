import React from 'react';
import styled from 'styled-components';
import * as PropTypesRepo from '../../types';
import Url from '../Url';
import { AChannel, AVideo, Img } from '../styled';
import PublishedAt from '../PublishedAt';
import { DescriptionBox, SnippetMetaBox, ThumbnailBox } from './styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 600px;
`;

class MobileSnippet extends React.PureComponent {
  render() {
    const {
      channelTitle,
      channelUrl,
      publishedAt,
      title,
      thumbnail,
      videoUrl,
    } = this.props.details;

    return (
      <Wrapper>
        <ThumbnailBox>
          <Url href={videoUrl} title={title}>
            <Img src={thumbnail} alt={title} />
          </Url>
        </ThumbnailBox>
        <DescriptionBox>
          <Url href={videoUrl} title={title} StyledA={AVideo} />
          <SnippetMetaBox>
            <Url href={channelUrl} title={channelTitle} StyledA={AChannel} />
            <PublishedAt at={publishedAt} prefix=" - " />
          </SnippetMetaBox>
        </DescriptionBox>
      </Wrapper>
    );
  }
}

MobileSnippet.propTypes = {
  details: PropTypesRepo.rowSnippet.isRequired,
};

export default MobileSnippet;
