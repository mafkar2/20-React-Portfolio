import { useEffect } from 'react';
import PageDisplay from '../PageDisplay';

import { capitalizeFirstLetter } from '../../utils/helpers';
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage)}</h2>

      <PageDisplay>
        <Outlet />
      </PageDisplay>
    </section>
  );
}
export default Page;