import dynamic from 'next/dynamic';

import { useQuery } from '@apollo/client';

import {
  HeaderContainer,
  LoginLink,
} from '@/components/Header/Header.styles';

import QUERY_VIEWER from '@/graphql/queries/Viewer.graphql';

const LazyLoggedHeader = dynamic(
  () => import('@/components/LoggedHeader/LoggedHeader.componet'),
);

function Header() {

  const { data } = useQuery(QUERY_VIEWER);

  return (
    <HeaderContainer>
      {
        data && data.viewer
          ? (<LazyLoggedHeader {...data.viewer.user} />)
          : (
            <LoginLink href="/api/authorize">
              Log in with Product Hunt
            </LoginLink>
          )
      }
    </HeaderContainer>
  );

}

export default Header;
