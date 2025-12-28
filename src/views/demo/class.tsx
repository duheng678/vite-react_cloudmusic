import { PureComponent } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
interface IState {
  name: string
}
class HomeClass extends PureComponent<IProps, IState> {
  state = {
    name: 'hello state',
  }
  constructor(props: IProps) {
    super(props)
  }
  render(): React.ReactNode {
    return <div>HomeClass</div>
  }
}

export default HomeClass
