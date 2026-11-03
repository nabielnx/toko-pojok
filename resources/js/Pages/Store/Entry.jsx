import { Head, Link, usePage } from '@inertiajs/react';
import PlatformLanding from '@/Components/Platform/PlatformLanding';
import useForceLightTheme from '@/Utils/useForceLightTheme';
import { PLATFORM_DESCRIPTION, PLATFORM_TITLE } from '@/Utils/platformLanding';
import '../../../css/platform-landing.css';

export default function StoreEntry() {
    const { auth } = usePage().props;
    useForceLightTheme();
    return <>
        <Head title={PLATFORM_TITLE}><meta head-key="description" name="description" content={PLATFORM_DESCRIPTION} /></Head>
        <PlatformLanding auth={auth} LinkComponent={Link} />
    </>;
}
