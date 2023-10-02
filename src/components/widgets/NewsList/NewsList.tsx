import { News } from '@/types/news';

import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import { Skeleton } from '@nextui-org/skeleton';
import { Spacer } from '@nextui-org/spacer';
import styled from 'styled-components';

type Props = {
  news?: News[];
  isLoading?: boolean;
};

export function NewsList({ news, isLoading }: Props) {
  return (
    <ListContainer className="my-14">
      {isLoading &&
        new Array(20).fill(null).map((_, index) => (
          <Card key={index} className="p-4 h-300">
            <Spacer y={4} />
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <Spacer y={4} />
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </Card>
        ))}
      {news?.map(news => (
        <Card className="py-4" key={news.id}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-3">
            <p className="text-tiny uppercase font-bold">{news.title}</p>
            <small className="text-default-500">{news.category}</small>
          </CardHeader>
          <Divider />
          <CardBody className="overflow-visible py-2 flex justify-center gap-3">
            <div className="font-light text-sm">{news.description}</div>
            {news.image && (
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={news.image}
                width="100%"
                height="200px"
                style={{ maxHeight: 200 }}
              />
            )}
          </CardBody>
          {(news.description || news.image) && <Divider />}
          <CardFooter>
            <Link isExternal showAnchorIcon href={news.url ?? ''}>
              Visit news
            </Link>
          </CardFooter>
        </Card>
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
`;
