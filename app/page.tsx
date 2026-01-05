"use client"

import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../lib/store"
import { increment } from "../lib/features/counterSlice"

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(increment())}>
      Count: {count}
    </button>
  )
}
