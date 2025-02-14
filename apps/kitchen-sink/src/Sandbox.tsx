// debug-verbose
// import './wdyr'

import { useState } from 'react'
import { View, TextInput } from 'react-native'
import {
  Button,
  Input,
  Square,
  Stack,
  XStack,
  YStack,
  useProps,
  usePropsAndStyle,
} from 'tamagui'
import { TimedRender } from './components/TimedRender'
import { SwitchDemo } from '@tamagui/demos'

const TestThing = (props) => {
  const [p2, style] = usePropsAndStyle(props)

  return null
}

export const Sandbox = () => {
  return (
    <View style={{ width: '100%', height: '100%', padding: 50 }}>
      <TextInput style={{ width: 200, height: 100 }} selectionColor="#fff" />
      <Input width={200} />
      <Input width={200} selectionColor="$green5" />
    </View>
  )
}

// animationKeyframes: {
//   from: {
//     opacity: 0,
//     transform: [{ translateY: 50 }],
//   },
//   to: {
//     opacity: 1,
//     transform: [{ translateY: 0 }],
//   },
// },
// animationDuration: '0.8s',
// animationFillMode: 'both',
// animationDelay: '800ms',

import { styled, useTheme } from '@tamagui/core'

import { SwitchStyledContext, createSwitch } from '@tamagui/switch'

import { Label } from 'tamagui'
const Frame = styled(Stack, {
  context: SwitchStyledContext,

  width: 40,

  height: 20,

  borderRadius: 20,

  variants: {
    checked: {
      true: {
        backgroundColor: 'lightblue',
      },

      false: {
        backgroundColor: 'silver',
      },
    },
  } as const,

  defaultVariants: {
    checked: false,
  },
})
const Thumb = styled(Stack, {
  context: SwitchStyledContext,

  width: 20,

  height: 20,

  backgroundColor: 'black',

  borderRadius: 20,
  variants: {
    checked: {
      true: {
        opacity: 0.8,
      },

      false: {
        opacity: 0.5,
      },
    },
  } as const,
})
// TODO: remove ts-ignores

export const Switch = createSwitch({
  // @ts-ignore

  Frame,

  // @ts-ignore

  Thumb,
})
export function SwitchUnstyledDemo() {
  return (
    <YStack width={200} alignItems="center" space="$3">
      <XStack space="$3" alignItems="center">
        <Label htmlFor="unstyled-switch">Unstyled</Label>

        <Switch defaultChecked id="unstyled-switch">
          <Switch.Thumb animation="quick" />
        </Switch>
      </XStack>
    </YStack>
  )
}
