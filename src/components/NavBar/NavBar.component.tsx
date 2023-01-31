import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Menu,
  Nav,
} from '@/components/NavBar/NavBar.style';

function NavBar() {

  const router = useRouter();

  const active = router.asPath === '/'
    ? 'first'
    : 'last';

  return (
    <Nav active={active}>
      <Menu>
        <li>
          <Link href="/">
            Popular
          </Link>
        </li>

        <li>
          <Link href="/newest">
            Newest
          </Link>
        </li>
      </Menu>
    </Nav>
  );

}

export default NavBar;
