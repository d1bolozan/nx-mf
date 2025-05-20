import { Button, Container, Group, Text, Title } from '@mantine/core';
import { Illustration } from './Illustration';
import './NothingFound.css';
import { useNavigate } from 'react-router-dom';

export function NothingFoundBackground({
  onNavigateToHomePage,
  resetErrorBoundary,
}: {
  onNavigateToHomePage?: () => void;
  resetErrorBoundary?: () => void;
}) {
  const navigate = useNavigate();
  return (
    <Container className="root">
      <div className="inner">
        <Illustration className="image" />
        <div className="content">
          <Title className="title">Nothing to see here</Title>
          <Text
            c="dimmed"
            size="lg"
            ta="center"
            className="description mx-auto"
          >
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Group justify="center">
            <Button
              size="md"
              onClick={() => {
                if (resetErrorBoundary) {
                  resetErrorBoundary();
                }
                if (onNavigateToHomePage) {
                  onNavigateToHomePage();
                } else {
                  navigate('/');
                }
              }}
            >
              Take me back to home page
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}
