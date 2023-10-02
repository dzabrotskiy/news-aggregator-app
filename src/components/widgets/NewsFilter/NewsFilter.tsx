import { Sources } from '@/services/api/news/constants';
import { useNewsStore } from '@/store/NewsStore';

import { Button } from '@nextui-org/button';
import { Checkbox, CheckboxGroup } from '@nextui-org/checkbox';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { Input } from '@nextui-org/input';
import styled from 'styled-components';

type SourceOption = {
  value: Sources;
  label: string;
};

const sourcesOptions: SourceOption[] = [
  { value: Sources.THE_GUARDIAN, label: 'The Guardian' },
  { value: Sources.NY_TIMES, label: 'New York Times' },
  { value: Sources.NEWS_API_ORG, label: 'News API' },
];

type Props = {
  showDateRangePicker?: boolean;
};

export function NewsFilter({ showDateRangePicker = false }: Props) {
  const {
    sources,
    setSelectedSources,
    fromDate,
    toDate,
    setFromDate,
    setToDate,
  } = useNewsStore();

  return (
    <Container>
      <CheckboxGroup
        label="Select sources"
        defaultValue={sources}
        orientation="horizontal"
        onValueChange={sources => setSelectedSources(sources as Sources[])}
      >
        {sourcesOptions.map(({ value, label }) => (
          <Checkbox key={value} value={value}>
            {label}
          </Checkbox>
        ))}
      </CheckboxGroup>

      {showDateRangePicker && (
        <Dropdown backdrop="blur" placement="bottom-end">
          <DropdownTrigger>
            <Button variant="bordered">Date range</Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem
              isReadOnly
              key="from-date"
              className="cursor-default"
              endContent={
                <Input
                  // NOTE: ts-ignore here because input[type=date] isn't typed in the library
                  // @ts-ignore
                  value={fromDate}
                  label="From date"
                  placeholder="From date"
                  type="date"
                  // NOTE: ts-ignore here because input[type=date] isn't typed in the library
                  // @ts-ignore
                  onValueChange={setFromDate}
                />
              }
            >
              From date
            </DropdownItem>
            <DropdownItem
              isReadOnly
              key="to-date"
              className="cursor-default"
              endContent={
                // we can add here validation. min date = fromDate
                <Input
                  // NOTE: ts-ignore here because input[type=date] isn't typed in the library
                  // @ts-ignore
                  value={toDate}
                  // NOTE: ts-ignore here because input[type=date] isn't typed in the library
                  // @ts-ignore
                  onValueChange={setToDate}
                  label="To date"
                  placeholder="To date"
                  type="date"
                />
              }
            >
              From date
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;

  ${props => props.theme.breakpoints.down('lg')} {
    gap: 20px;
    flex-direction: column;
  }
`;
