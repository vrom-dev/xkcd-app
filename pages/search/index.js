export default function Component({prop}) {
  return <>null</>
}

export async function getServerSideProps(context) {
  const { query } = context
  const { search } = query
  return {
    props: {

    }
  }
}