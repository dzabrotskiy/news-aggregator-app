import { useNewsStore } from '@/store/NewsStore';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal';
import { Spacer } from '@nextui-org/spacer';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

export function SearchModal() {
  const [keywords, setKeywords] = useState<string>();
  const { isSearchModalOpen, setSearchModalOpened } = useNewsStore();
  const router = useRouter();

  const onSearch = useCallback(() => {
    if (!keywords) return;

    const nextUrl = `/search?q=${keywords}`;
    setSearchModalOpened(false);

    router.push(nextUrl);
  }, [keywords, router, setSearchModalOpened]);

  return (
    <Modal
      size="full"
      isOpen={isSearchModalOpen}
      onClose={() => setSearchModalOpened(false)}
    >
      <ModalContent>
        <ModalHeader>Type your keywords</ModalHeader>
        <ModalBody>
          <Centered>
            <Content>
              <Input
                placeholder="Enter keywords here..."
                value={keywords}
                onValueChange={setKeywords}
              />
              <Spacer y={10} />
              <Button
                onPress={onSearch}
                isDisabled={!keywords?.length}
                color="primary"
              >
                Search
              </Button>
            </Content>
          </Centered>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  width: 100%;

  ${props => props.theme.breakpoints.down('lg')} {
    max-width: 100%;
  }
`;
