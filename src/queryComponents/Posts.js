import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

// STYLES

const PostList = styled.ul`
  list-style: none;
  max-width: 600px;
  margin: 0 auto;
`;

const Post = styled.li`
  background: seashell;
  border-radius: 10px;
  color: #383838;
  margin: 10px;
  padding: 10px 20px;
  box-shadow: 0 10px 6px -6px #777;
  /* box-shadow: 0 3px 2px #777; */
`;

const TitlePanel = styled.div`
  margin-bottom: 25px;
  /* border-bottom: 1px solid #383838; */
`;

const ActionPanel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Posts = () => (
  <PostList>
    <Query
      query={gql`
        {
          posts {
            title
            body
            id
            author {
              email
            }
            comments {
              body
              id
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading...</p>;
        }

        if (error) {
          return <p>Error :(</p>;
        }

        return data.posts.map(post => (
          <Post key={post.id}>
            <TitlePanel>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </TitlePanel>
            <ActionPanel>
              <p>Author: {post.author.email}</p>
              <p>Comments: {post.comments.length}</p>
            </ActionPanel>
          </Post>
        ));
      }}
    </Query>
  </PostList>
);

export default Posts;
