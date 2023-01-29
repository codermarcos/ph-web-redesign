import {
  HeaderContainer,
  IconMagnificGlass,
  Image,
  Input,
  SearchButton,
} from '@/components/LoggedHeader/LoggedHeader.styles';
import { useState } from 'react';

export type UserType = {
  name: string;
  profileImage: string;
}

function LoggedHeader({ name, profileImage }: UserType) {

  const [
    search,
    setSearch,
  ] = useState(false);

  return (
    <HeaderContainer>
      <Image
        alt={name}
        height={74}
        src={profileImage}
        width={74}
      />

      <Input type="search" />

      <SearchButton
        onClick={() => setSearch(!search)}
        type="button"
      >
        <IconMagnificGlass className={search
          ? 'active'
          : ''}
        />
      </SearchButton>
    </HeaderContainer>
  );

}

export default LoggedHeader;
